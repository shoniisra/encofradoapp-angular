export type Author = {
    id: number;
    firstName: string;
    lastName: string;
  }
  
  export type Post = {
    id: number;
    title: string;
    votes: number;
    author: Author;
  }
  
  export type Query = {
    clientes: Cliente[];
  }
  
  export type Mutation = {
    upvotePost: Post;
  }
  export type  Cliente = {
    id:number;
    cedula: string;
    direccion: string;
    direccion2: string;
    email: string;
    nombre: string;
    nombre2: string;
    observacion: string;
    telf1: string;
    telf2: string;
    telf3: string;
  }