class HttpService {
  // 	let photo = document.getElementById("image-file").files[0];
  // let formData = new FormData();

  // formData.append("photo", photo);
  // fetch('/upload/image', {method: "POST", body: formData});

  // public async getUserProfile(token: string) {
  // 	const options: RequestInit = this.buildHeaders(token);
  // 	const { data } = await this.get(`${process.env.FAN_ENGINE}/v3/profile`, options);
  // 	return data;
  // }

  private buildHeaders = (form = false): RequestInit => {
    return {
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': form ? 'multipart/form-data' : 'application/json',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
    };
  };

  private handleError = (response: Response): Response | PromiseLike<Response> => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response;
    }
  };

  private get = (url: string, options: RequestInit): Promise<{ [key: string]: any }> => {
    options.method = 'GET';
    return fetch(url, options) // body data type must match "Content-Type" header
      .then(this.handleError)
      .then((response) => response.json()); // parses response to JSON
  };

  private post = (url: string, body: BodyInit, options: RequestInit): Promise<{ [key: string]: any }> => {
    options.method = 'POST';
    options.body = options.headers['Content-Type'] === 'application/json' ? JSON.stringify(body) : body;
    return fetch(url, options) // body data type must match "Content-Type" header
      .then(this.handleError)
      .then((response) => response.json()); // parses response to JSON
  };
}
export const http = new HttpService();
