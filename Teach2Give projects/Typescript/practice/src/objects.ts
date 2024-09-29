//objects

type Album={
    title:string,
    artist:string,
    releaseYear:number
    
}

type SalesData={
    unitsSold: number;
    revenue:number
}

//join the two types

type AlbumSales=Album & SalesData

const wishYouWereHereSales: AlbumSales = {
    title: "Wish You Were Here",
    artist: "Pink Floyd",
    releaseYear: 1975,
    unitsSold: 13000000,
    revenue: 65000000,
  };

  //also possible to inersect more the 2 types

  type AlbumSales2=Album & SalesData & {genre:string}
  const wishYouWereHereSales2: AlbumSales2 = {
    title: "Wish You Were Here",
    artist: "Pink Floyd",
    releaseYear: 1975,
    unitsSold: 13000000,
    revenue: 65000000,
    genre: "",
  };

  // intersecting a string and a number

  type User1 = {
    age: number;
  };
  
  type User2 = {
    age2: number;
  };
  
  type user = User1 & User2;


  //interfaces
  //used to declare but just slightly from types
  interface Album2 {
    title:string,
    artist:string,
    releaseYear:number
    
}

interface SalesData2{
    unitsSold: number;
    revenue:number
}

//interface extends

//these allows the creation of one interface with the ability to inherit other interfaces

interface studioAlbum extends Album {
    studio: string
    producer:string
}
interface LiveAlbum extends Album {
    concertVenue:string,
    concertDate:string
}

const americanBeauty:studioAlbum={
    title: "American Beauty",
    artist: "Grateful Dead",
    releaseYear: 1970,
    studio: "Wally Heider Studios",
    producer: "Grateful Dead and Stephen Barncard" 
}


//interfaces intersections

//declaration merging

interface Album3{
    title: string;
  artist: string;
}
// But let's imagine that, in the same file, you accidentally declare another Album interface with properties for the releaseYear and genres:

interface Album3{
    releaseYear: number;
  genres: string[];
}

//results under the hood
// Under the hood:
interface Album3{
    title: string;
    artist: string;
    releaseYear: number;
    genres: string[];
  }





  ///exercises

  //#Exercise 1: Create an Intersection Type
type  commonIds={
    id: string;
    createdAt: Date;
}

  type User3 = {
    name: string;
    email: string;
  };
  
  type Product = {
    name: string;
    price: number;
  };

  type newProduct=commonIds & Product
  type newUser=commonIds&User3


  //Exercise 2: Extending Interfaces

  interface WithId {
    id: string;
  }
  
  interface WithCreatedAt {
    createdAt: Date;
  }
  
  interface User4 extends WithId, WithCreatedAt {
    name: string;
    email: string;
  }
  
  interface Product4 extends WithId, WithCreatedAt {
    name: string;
    price: number;
  }


  //dynamic object keys

  //you have to tell the typescript about the type of index it expects

  const albumAwards:{[index:string|number]:boolean|number|string}={}
   albumAwards.Grammy = true;
   albumAwards.MercuryPrize = false;
   albumAwards.Billboard = '';
   albumAwards.MercuryPriz = 10;


   //using RecordType for the dynamic keys

   const awards:Record<string,boolean>={}