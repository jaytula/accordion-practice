/**
 * @type {HTMLDivElement[]}
 */
const allAccordionElements = document.querySelectorAll(".accordion2");

allAccordionElements.forEach((accordionElement) => {

  /**
   * @type {HTMLDivElement}
   */
  const accordionContent = accordionElement.querySelector(":nth-child(2)");

  /**
   * @type {HTMLDivElement}
   */
  const accordionTitle = accordionElement.querySelector(":nth-child(1)");

  accordionTitle.addEventListener("click", function () {
    if (accordionContent.style.maxHeight === "0px") {
      accordionContent.style.maxHeight = "137px";
    } else {
      accordionContent.style.maxHeight = "0px";
    }
  });
});
