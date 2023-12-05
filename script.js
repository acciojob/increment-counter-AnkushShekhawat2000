 // Get the counter element and the increment button
    const counterElement = document.getElementById("counter");
    const incrementBtn = document.getElementById("incrementBtn");

    // Initial counter value
    let counterValue = 0;

    // Function to handle button click
    function handleIncrement() {
      // Display the current counter value in an alert
      alert("Un-incremented value: " + counterValue);
      
      // Increment the counter value
      counterValue++;

      // Update the counter element text
      counterElement.textContent = counterValue;
    }