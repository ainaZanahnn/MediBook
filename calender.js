// Function to initialize the calendar
function initializeCalendar() {
    return {
        // Stores the booked dates retrieved from localStorage or initializes as an empty array
        bookedDates: JSON.parse(localStorage.getItem('bookedDates')) || [],

        // Holds the currently selected date
        selectedDate: '',

        // Current month and year for the calendar view
        month: new Date().getMonth(),
        year: new Date().getFullYear(),

        // Calculates the number of days in the current month
        daysInMonth() {
            return new Date(this.year, this.month + 1, 0).getDate();
        },

        // Finds the day of the week for the first day of the current month
        firstDayOfMonth() {
            return new Date(this.year, this.month, 1).getDay();
        },

        // Generates the days for the calendar, including empty slots for alignment
        generateCalendar() {
            const totalDays = this.daysInMonth();
            const firstDay = this.firstDayOfMonth();
            let days = [];
            for (let i = 0; i < firstDay; i++) {
                days.push(null); // Empty slots for days before the 1st
            }
            for (let i = 1; i <= totalDays; i++) {
                days.push(i); // Actual days of the month
            }
            return days;
        },

        // Checks if a specific date is already booked
        checkAvailability(date) {
            const formattedDate = `${this.year}-${String(this.month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
            return this.bookedDates.includes(formattedDate); // Returns true if booked
        },

        // Books an appointment for the selected date
        bookAppointment() {
            // Get form field values
            var userName = document.getElementById('userName').value;
            var userEmail = document.getElementById('userEmail').value;
            var notes = document.getElementById('notes').value;

            // Ensure all fields are filled and a date is selected
            if (!userName || !userEmail || !this.selectedDate) {
                alert("Please complete your form.");
                return;
            }

            // Format the selected date
            const formattedDate = `${this.year}-${String(this.month + 1).padStart(2, '0')}-${String(this.selectedDate).padStart(2, '0')}`;

            // Check if the date is already booked
            if (!this.checkAvailability(this.selectedDate)) {
                // Add the date to the bookedDates array and update localStorage
                this.bookedDates.push(formattedDate);
                this.bookedDates.sort((a, b) => new Date(a) - new Date(b)); // Keep dates in order
                localStorage.setItem('bookedDates', JSON.stringify(this.bookedDates));

                alert('Appointment booked successfully!');
            } else {
                alert('This date is already booked.');
            }
        },

        // Cancels an existing appointment for a given date
        cancelAppointment(date) {
            this.bookedDates = this.bookedDates.filter(d => d !== date); // Remove the date
            localStorage.setItem('bookedDates', JSON.stringify(this.bookedDates));
            alert('Appointment cancelled successfully!');
        },

        // Navigates to the previous or next month
        changeMonth(offset) {
            this.month += offset;
            if (this.month < 0) {
                this.month = 11; // Wrap to December
                this.year -= 1; // Move to previous year
            } else if (this.month > 11) {
                this.month = 0; // Wrap to January
                this.year += 1; // Move to next year
            }
        },

        // Lifecycle hook for initializing Alpine.js functionality
        init() {
            console.log("Alpine.js booking system initialized!");
        },
    };
}

// Attach the function to the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    const calendarElement = document.querySelector('.container');
    if (calendarElement) {
        calendarElement.__x = initializeCalendar(); // Attach Alpine.js data object
    }
});
