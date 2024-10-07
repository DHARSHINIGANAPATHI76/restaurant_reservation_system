let reservations = [];

document.getElementById('submit-button').addEventListener('click', (e) => {
    e.preventDefault();

    const customerName = document.getElementById('customer-name').value;
    const numberOfGuests = document.getElementById('number-of-guests').value;
    const reservationTime = document.getElementById('reservation-time').value;

    const reservation = {
        customerName,
        numberOfGuests,
        reservationTime
    };

    reservations.push(reservation);

    displayReservations();
});

function displayReservations() {
    const reservationList = document.getElementById('reservation-list');
    reservationList.innerHTML = '';

    reservations.forEach((reservation, index) => {
        const reservationHTML = `
            <div class="reservation">
                <h2>${reservation.customerName}</h2>
                <p>Number of Guests: ${reservation.numberOfGuests}</p>
                <p>Reservation Time: ${reservation.reservationTime}</p>
                <button class="delete-button" onclick="deleteReservation(${index})">Delete</button>
            </div>
        `;
        reservationList.insertAdjacentHTML('beforeend', reservationHTML);
    });
}

function deleteReservation(index) {
    reservations.splice(index, 1);
    displayReservations();
}