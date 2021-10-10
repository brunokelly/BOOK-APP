export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
    };
  };
}

export interface IBookReponse {
  items: IBook[];
}

export interface IDetailParams {
  detail: string;
}
