let total = 0;
let serialCount = 0;

function addToCard(target){
    const CardProductPrice = target.parentNode.previousElementSibling.childNodes[1];
    const cardProductTitle = target.parentNode.previousElementSibling.previousElementSibling.childNodes[1];
    const totalPrice = document.getElementById('totalPrice');
    const table = document.getElementById('tableElement');
    
    total = total + parseFloat(CardProductPrice.innerText);
    serialCount++
    
    console.log(cardProductTitle)

    let tableRow = document.createElement('tr')
    tableRow.innerHTML = `
                        <tr>
                          <th>
                            <label>
                              ${serialCount}
                            </label>
                          </th>
                          <td>
                            <div class="flex items-center space-x-3">
                              <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                  <img src="./assets/img/product-4.jpeg" alt="Avatar Tailwind CSS Component">
                                </div>
                              </div>
                              <div>
                                <div class="font-bold">${cardProductTitle.innerText}</div>
                              </div>
                            </div>
                          </td>
                          <td class="font-bold">$${CardProductPrice.innerText}</td>
                          <td>2</td>
                        </tr>
    
    `


    table.appendChild(tableRow)
    totalPrice.innerText = total






}