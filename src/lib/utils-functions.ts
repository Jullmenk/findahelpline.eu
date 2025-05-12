export const extractDomain = (url:string) => {
    try {
      const hostname = new URL(url).hostname;
      return hostname.replace(/^www\./, '');
    } catch (e) {
      return url; // Fallback para mostrar o original se for inválido
    }
  }


 export function isOpen(hours:string) {
    const data = new Date()
    const diasSemana = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const diaAtual = diasSemana[data.getDay()];
    const horaAtual = data.getHours() + data.getMinutes() / 60;
  
    // Verifica se é dia útil (Weekdays)
    const isWeekday = !['Saturday', 'Sunday'].includes(diaAtual);
  
    if (hours.includes("Weekdays") && !isWeekday) {
      return false;
    }
  
    // Extrai faixas de horário (ex: "10 AM - 1 PM and 2 PM - 5 PM")
    const intervalos = hours.match(/\d{1,2}\s?(AM|PM)\s?-\s?\d{1,2}\s?(AM|PM)/gi);
  
    if (!intervalos) return false;
  
    for (const intervalo of intervalos) {
      const [inicioStr, fimStr] = intervalo.split('-').map(s => s.trim());
  
      const horaInicio = to24Hour(inicioStr);
      const horaFim = to24Hour(fimStr);
  
      if (horaAtual >= horaInicio && horaAtual <= horaFim) {
        return true;
      }
    }
  
    return false;
  }

  function to24Hour(timeStr) {
    const [_, hour, period] = timeStr.match(/(\d{1,2})\s?(AM|PM)/i) || [];
    let h = parseInt(hour);
    if (period.toUpperCase() === "PM" && h !== 12) h += 12;
    if (period.toUpperCase() === "AM" && h === 12) h = 0;
    return h;
  }