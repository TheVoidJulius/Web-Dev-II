const eventTitle = document.getElementById("eventTitle")
const eventDate = document.getElementById("eventDate")
const eventCategory = document.getElementById("eventCategory")
const eventDescription = document.getElementById("eventDescription")
const addEventBtn = document.getElementById("addEventBtn")
const eventsContainer = document.getElementById("eventsContainer")
const clearEventsBtn = document.getElementById("clearEvents")
const sampleEventsBtn = document.getElementById("sampleEvents")

function renderEmpty() {
  eventsContainer.innerHTML = `<p class="empty-text">No events yet. Add your first event!</p>`
}

function createEventCard(title, date, category, description) {
  const card = document.createElement("div")
  card.className = "event-card"

  card.innerHTML = `
    <h3>${title}</h3>
    <span>${date} • ${category}</span>
    <p>${description}</p>
    <button class="delete-btn">Delete</button>
  `

  eventsContainer.appendChild(card)
}

addEventBtn.addEventListener("click", function () {
  if (!eventTitle.value || !eventDate.value || !eventDescription.value) return

  if (eventsContainer.querySelector(".empty-text")) {
    eventsContainer.innerHTML = ""
  }

  createEventCard(
    eventTitle.value,
    eventDate.value,
    eventCategory.value,
    eventDescription.value
  )

  eventTitle.value = ""
  eventDate.value = ""
  eventDescription.value = ""
})

clearEventsBtn.addEventListener("click", function () {
  eventsContainer.innerHTML = ""
  renderEmpty()
})

sampleEventsBtn.addEventListener("click", function () {
  eventsContainer.innerHTML = ""

  createEventCard(
    "Tech Conference",
    "2026-03-10",
    "Conference",
    "Annual technology conference"
  )

  createEventCard(
    "JavaScript Workshop",
    "2026-04-05",
    "Workshop",
    "Hands-on JS learning session"
  )
})

eventsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove()
    if (!eventsContainer.children.length) {
      renderEmpty()
    }
  }
})

document.addEventListener("keydown", function (e) {
  if (e.key === "Shift") {
    document.querySelector(".key-text").innerText = "You pressed: Shift"
  }
})

renderEmpty()
