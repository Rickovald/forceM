class BannersService {
  get = async () => {
    const settings = {
      //   mode: "no-cors",
      method: "GET",
      //   credentials: "include",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };

    return fetch("http://localhost:5000/banners", settings);
  };
  post = async (json) => {
    const settings = {
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        name: json.name,
        description: json.description,
        photo: json.photo,
        price: json.price,
      }),
    };

    return fetch("http://localhost:5000/banners", settings);
  };
}

export default BannersService;
