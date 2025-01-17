document.addEventListener('DOMContentLoaded', () => {
    // Load bookings from localStorage
    const loadBookings = () => {
      const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
      const bookingTable = document.querySelector('#bookingTable tbody');
      bookingTable.innerHTML = bookings.map((booking, index) => `
        <tr>
          <td>${booking.providerName}</td>
          <td>${booking.specialty}</td>
          <td>${booking.location}</td>
          <td>${booking.appointmentDate}</td>
          <td>
            <button class="btn btn-danger btn-sm cancel-button" data-index="${index}">Cancel</button>
          </td>
        </tr>
      `).join('');
      attachCancelEvent();
    };
  
    // Cancel appointment
    const attachCancelEvent = () => {
      document.querySelectorAll('.cancel-button').forEach(button => {
        button.addEventListener('click', (e) => {
          const index = e.target.getAttribute('data-index');
          const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
          bookings.splice(index, 1); // Remove the booking
          localStorage.setItem('bookings', JSON.stringify(bookings));
          loadBookings();
          alert('Appointment canceled.');
        });
      });
    };
  
    // Go back to the Provider Page
    window.goBack = () => {
      window.history.back(); // Navigates back to the previous page
    };
  
    // Initial load of bookings
    loadBookings();
  });
  