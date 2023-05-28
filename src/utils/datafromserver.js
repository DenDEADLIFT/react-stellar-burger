const link = "https://norma.nomoreparties.space/api/ingredients";
const linkorder = 'https://norma.nomoreparties.space/api/orders';

export const Serverdata = () => {
   return fetch(link, {
      method: 'GET',
      headers: {
         "Content-Type": "application/json"
      }
   })
      .then(resolve => {
         if (resolve.ok) {
            return (
               resolve = resolve.json())
         } else {
            return Promise.reject(`Ошибка ${resolve.status}`);
         }
      })
}

export const Orderdata = (items) => {
   return fetch(linkorder, {
      method: 'POST',
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         'ingredients': items,
      })
   })
      .then(resolve => {
         if (resolve.ok) {
            return (
               resolve = resolve.json())
         } else {
            return Promise.reject(`Ошибка ${resolve.status}`);
         }
      })
}