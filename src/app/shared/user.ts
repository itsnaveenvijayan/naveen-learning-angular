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
  private page_numbers: number[]; 

  get pageNumbers(){
    this.page_numbers = new Array<number>();
    for (let i = 1; i <= this.total_pages; i++) {      
      this.page_numbers.push(i)
    }
    return this.page_numbers;
  }

  
}
