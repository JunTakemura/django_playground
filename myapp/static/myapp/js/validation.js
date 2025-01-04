document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("postForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const titleField = document.getElementById("title");
    const contentField = document.getElementById("content");

    // Basic checks
    if (!titleField.value.trim()) {
      alert("Title cannot be empty.");
      return;
    }
    if (titleField.value.trim().length < 3) {
      alert("Title must be at least 3 characters long.");
      return;
    }
    if (!contentField.value.trim()) {
      alert("Content cannot be empty.");
      return;
    }

    // Sanitize the user inputs on the front end
    const sanitizedTitle = DOMPurify.sanitize(titleField.value.trim());
    const sanitizedContent = DOMPurify.sanitize(contentField.value.trim());

    // Overwrite fields with sanitized versions
    titleField.value = sanitizedTitle;
    contentField.value = sanitizedContent;

    // Submit the form for real
    form.submit();
  });
});

