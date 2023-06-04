async function fetchData() {
    try {
        const result = await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json");
        const data = await result.json();
        getMenu(data);
    }
    catch (error) {
        alert("some error occured");
    }
}
fetchData();

const menuContainer = document.getElementsByClassName('menu-container')[0];
//console.log(menuContainer);

function getMenu(resultsList) {
    //console.log(resultsList)

    for (let i = 0; i<resultsList.length; i++) {
        
        let menuItems = document.createElement('div');
        menuItems.className = "menu-items";
        let items = resultsList[i];
        //console.log(items);
        let innerHtml = `
                <div class="heading">
                    <span class="id">${items.id}</span>
                    <span><b>${items.name}</b></span>
                </div>
                <div class="image">
                    <img src="${items.imgSrc}">
                </div>
                <div class="price">
                    <span><b>Price:</b> $ ${items.price}</span>
                </div>
    `;
        menuItems.innerHTML = innerHtml;
        menuContainer.append(menuItems);
    }

}


function takeOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const burgers = ['Cheeseburger', 'Chicken Burger', 'Veggie Burger'];
        const order = {
          burgers: burgers.sort(() => 0.5 - Math.random()).slice(0, 3)
        };
        resolve(order);
      }, 2500);
    })
    .then(order => {
      console.log('Order:', order);
      return orderPrep();
    })
    .then(orderStatus => {
      console.log('Order Status:', orderStatus);
      return payOrder();
    })
    .then(paymentStatus => {
      console.log('Payment Status:', paymentStatus);
      thankyouFnc();
    })
    .catch(error => {
      console.log('Error:', error);
    });
  }
  
  // Function for order preparation
  function orderPrep() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }
  
  // Function for order payment
  function payOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }
  
  // Function to display the thank you message
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }