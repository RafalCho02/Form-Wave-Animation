const labels = $(".form-control label");

labels.each(function () {
  const label = $(this);
  const html = label.html();
  const newHTML = html
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
  label.html(newHTML);
});
