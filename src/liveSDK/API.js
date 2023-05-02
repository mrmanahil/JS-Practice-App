//Auth token we will use to generate a meeting and connect to it
export const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI3NzMzNmZjMC05YTdjLTQ0N2EtYjg5OC1hZDI4M2QyMDIxN2YiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY4MDE2MzIzNSwiZXhwIjoxNjgwNzY4MDM1fQ.nt2cM64uhG4ZAajWK77Vlv7UYGYly_qbxqLdKmrQGzs";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};
