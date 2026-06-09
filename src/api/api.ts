export const updateCardStatus = async (cardId: number, status: string) => {
  await fetch(`https://api.example.com/cards/${cardId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status }),
  });
};
