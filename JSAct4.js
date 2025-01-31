  // JavaScript for Date Subtraction
        document.getElementById('calculateButton').addEventListener('click', function () {
            const startDate = new Date(document.getElementById('startDate').value);
            const endDate = new Date(document.getElementById('endDate').value);

            if (isNaN(startDate) || isNaN(endDate)) {
                document.getElementById('result').textContent = 'Please enter valid dates.';
                return;
            }

            if (endDate < startDate) {
                document.getElementById('result').textContent = 'End date must be after start date.';
                return;
            }

            const timeDifference = endDate - startDate;
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            document.getElementById('result').textContent = `Difference: ${daysDifference} day(s)`;
        });