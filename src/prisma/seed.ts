import { prismaL } from '@/lib/prisma';
import * as fs from 'fs/promises';
import * as path from 'path';

const prisma = prismaL;

const countryCodes: Record<string, string> = {
  Portugal: "PT",
  Spain: "ES",
  France: "FR",
  Germany: "DE",
  Netherlands: "NL",
  Belgium: "BE",
  Switzerland: "CH",
  Austria: "AT",
  Ireland: "IE",
  "United Kingdom": "GB",
  Italy: "IT",
  Denmark: "DK",
  Finland: "FI",
  Sweden: "SE",
  Norway: "NO",
  Poland: "PL",
  "Czech Republic": "CZ",
  Hungary: "HU",
  Slovakia: "SK",
  Slovenia: "SI",
  Croatia: "HR",
  Bulgaria: "BG",
  Romania: "RO",
  Greece: "GR",
  Estonia: "EE",
  Latvia: "LV",
  Lithuania: "LT",
  Malta: "MT",
  Wales: "WA",
};

async function main() {
  const dataPath = path.join(__dirname, 'generated-helplines.json');
  let helplines;
  try {
    const raw = await fs.readFile(dataPath, 'utf-8');
    helplines = JSON.parse(raw);
  } catch (error) {
    console.error("Failed to read or parse generated-helplines.json:", error);
    process.exit(1);
  }

  const countriesMap = new Map<string, { name: string; languages: string[] }>();

  helplines.forEach((item: any) => {
    if (!countriesMap.has(item.country)) {
      countriesMap.set(item.country, {
        name: item.country,
        languages: item.languages,
      });
    }
  });

  for (const [, country] of countriesMap.entries()) {
    const code = countryCodes[country.name];
    if (!code) {
      console.warn(`⚠️ Código ISO não encontrado para país: ${country.name}. Ignorando...`);
      continue;
    }

    await prisma.country.upsert({
      where: { name: country.name },
      update: {},
      create: {
        name: country.name,
        code,
        languages: country.languages,
      },
    });
  }

  for (const helpline of helplines) {
    await prisma.helpline.upsert({
      where: {
        name_country: {
          name: helpline.name,
          country: helpline.country,
        },
      },
      update: {
        phone: helpline.phone,
        website: helpline.website,
        languages: helpline.languages,
      },
      create: {
        name: helpline.name,
        country: helpline.country,
        phone: helpline.phone,
        website: helpline.website,
        languages: helpline.languages,
      },
    });
  }

  console.log('✅ Seed realizado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });