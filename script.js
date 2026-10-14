const dateElement = document.querySelector("#today");
const greetingElement = document.querySelector("#greeting");
const clockElement = document.querySelector("#clock");

function updateDashboardTime() {
  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? "GOOD MORNING" : hour < 18 ? "GOOD AFTERNOON" : "GOOD EVENING";

  if (dateElement) {
    dateElement.textContent = new Intl.DateTimeFormat("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(now);
  }

  if (greetingElement) {
    greetingElement.textContent = greeting;
  }

  if (clockElement) {
    clockElement.textContent = new Intl.DateTimeFormat("en-IN", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(now);
  }
}

updateDashboardTime();
window.setInterval(updateDashboardTime, 60_000);