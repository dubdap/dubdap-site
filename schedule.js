
// ---- Configure your available meeting slots here ----
// Times should be in ISO 8601 (local) or 'YYYY-MM-DDTHH:MM' format.
const slots = [
  // Today + tomorrow samples (adjust freely)
];

// Helper to generate next N 30-min slots starting next hour between 9am-5pm
function generateDefaultSlots(daysAhead=3){
  const result = [];
  const now = new Date();
  for(let d=0; d<daysAhead; d++){
    const day = new Date(now);
    day.setDate(now.getDate()+d);
    for(let h=9; h<=16; h++){ // 9 to 4:30 start
      for(let m of [0,30]){
        const slot = new Date(day.getFullYear(), day.getMonth(), day.getDate(), h, m, 0);
        if (slot > now) result.push(slot);
      }
    }
  }
  return result;
}

const effectiveSlots = slots.length ? slots.map(s => new Date(s)) : generateDefaultSlots(5);

// Render slots
function renderSlots(){
  const list = document.getElementById('slot-list');
  list.innerHTML = '';
  effectiveSlots.forEach(dt => {
    const li = document.createElement('div');
    li.className = 'slot';
    const timeStr = dt.toLocaleString([], { dateStyle:'medium', timeStyle:'short' });
    li.innerHTML = `<span>${timeStr}</span>`;
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = 'Book';
    btn.addEventListener('click', () => bookSlot(dt));
    li.appendChild(btn);
    list.appendChild(li);
  });
}

// Booking -> build ICS + show
function bookSlot(dt){
  const name = (document.getElementById('name').value || '').trim();
  const email = (document.getElementById('email').value || '').trim();
  const durationMinutes = parseInt(document.getElementById('duration').value || '30',10);
  const title = (document.getElementById('title').value || 'Meeting with Dubdap').trim();
  const location = (document.getElementById('location').value || 'Online').trim();
  const notes = (document.getElementById('notes').value || '').trim();

  const dtStart = dt;
  const dtEnd = new Date(dtStart.getTime() + durationMinutes*60000);

  const ics = buildICS({title, location, description: notes, start: dtStart, end: dtEnd});
  const blob = new Blob([ics], {type: 'text/calendar;charset=utf-8'});
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'meeting.ics';
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 500);

  const conf = document.getElementById('confirmation');
  conf.innerHTML = `Booked <strong>${title}</strong> on <strong>${dtStart.toLocaleString([], {dateStyle:'medium', timeStyle:'short'})}</strong>. Downloaded calendar invite.`;
  conf.classList.remove('hidden');
}

function toICSDate(d){
  const pad = n => String(n).padStart(2,'0');
  return d.getUTCFullYear().toString() +
         pad(d.getUTCMonth()+1) +
         pad(d.getUTCDate()) + 'T' +
         pad(d.getUTCHours()) +
         pad(d.getUTCMinutes()) +
         pad(d.getUTCSeconds()) + 'Z';
}

function buildICS({title, location, description, start, end}){
  const uid = 'qrmeet-' + Math.random().toString(36).slice(2) + '@example';
  const dtstamp = toICSDate(new Date());
  const dtstart = toICSDate(start);
  const dtend = toICSDate(end);
  // Escape commas/semicolons
  const esc = (s='') => s.replace(/,/g,'\,').replace(/;/g,'\;');
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//QRMeet//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:' + uid,
    'DTSTAMP:' + dtstamp,
    'DTSTART:' + dtstart,
    'DTEND:' + dtend,
    'SUMMARY:' + esc(title),
    'LOCATION:' + esc(location),
    'DESCRIPTION:' + esc(description),
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
}

document.addEventListener('DOMContentLoaded', renderSlots);
