let template1 = `  
  <li class="page-item" id="back">
    <a class="page-link back" href="#" aria-label="Previous">
      &laquo;
    </a>
  </li>
`;

let template3 = `
  <li class="page-item" id="next">
    <a class="page-link next" href="#" aria-label="Next">&raquo;</a>
  </li>  
`;

const showPagination = (totalPages) => {
  let template2 = "";

  for (let i = 0; i < totalPages; i++) {
    template2 += `
      <li class="page-item tab-${i}">
        <a class="page-link link-${i} custom-anchor" href="#">${i + 1}</a>
      </li>
    `;
  }

  return template1 + template2 + template3;
};

export default showPagination;
