const link = "https://norma.nomoreparties.space/api/ingredients";

export const serverdata = () => {
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
      .catch((reject) => {
         console.log(`Ошибка ${reject.status}`);
      });
}