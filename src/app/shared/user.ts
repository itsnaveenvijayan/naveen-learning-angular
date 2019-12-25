export class User { 
  id: number; 
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export class ListUsers{
  page: number;
  per_page: number;
  total: number;
  total_pages: number;  
  data: User[];
  page_numbers: number[];

  set set_page_numbers(value: boolean){
    let pagenumbers: number[];
    for (let i = 1; i < this.total_pages; i++) {
      pagenumbers.push(i)
    }
    this.page_numbers = pagenumbers;
  }
}
