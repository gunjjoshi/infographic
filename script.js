// Get existing elements and forbidden zone elements
const existingElements = document.querySelectorAll('.existing-element');
const forbiddenZones = document.querySelectorAll('.fz');

function checkOverlap(newElement, existingElements) {
  const newElementRect = newElement.getBoundingClientRect();

  // Check for overlap with each existing element
  for (let i = 0; i < existingElements.length; i++) {
    const existingElementRect = existingElements[i].getBoundingClientRect();

    // Check for overlap using position values
    if (
      newElementRect.right > existingElementRect.left &&
      newElementRect.left < existingElementRect.right &&
      newElementRect.bottom > existingElementRect.top &&
      newElementRect.top < existingElementRect.bottom
    ) {
      return true; // Overlap found
    }
  }

  return false; // No overlap
}

function addNewElement() {
  const container = document.querySelector('.container');
  const newElement = document.createElement('div');
  newElement.textContent = 'New Element';

  // Random position for the new element
  let left = Math.random() * (container.clientWidth - 100); // Adjust width as needed
  let top = Math.random() * (container.clientHeight - 100); // Adjust height as needed

  newElement.style.left = `${left}px`;
  newElement.style.top = `${top}px`;
  
  // Check for overlap with forbidden zones or existing elements
  for (let i = 0; i < forbiddenZones.length; i++) {
    if (checkOverlap(newElement, [forbiddenZones[i], ...existingElements])) {
      // If overlap found, reposition the new element
      left = Math.random() * (container.clientWidth - 100);
      top = Math.random() * (container.clientHeight - 100);
      newElement.style.left = `${left}px`;
      newElement.style.top = `${top}px`;
      i = -1; // Restart the loop to check again
    }
  }

  // Add new element to the container
  newElement.classList.add('new-element');
  container.appendChild(newElement);
}

// Usage: Call addNewElement() when you want to add a new element
addNewElement();
