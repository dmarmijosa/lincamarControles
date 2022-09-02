export class Calendario {

  dt              :Date = new Date();
  month           :number   = this.dt.getMonth();
  year            :number = this.dt.getFullYear();
  dias            :number[]=[];
  diasDeLaSemana  :string[] =['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];

  obtenerDias(mes:number):string[]{
    let valor:string[]=[];
    let daysInMonth = new Date(this.year, mes, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      //let now = new Date(this.year, 2, i).toLocaleDateString('es-Es', { weekday:"long", month:"long", day:"numeric"});
      valor.push(`${i}/${mes}/${this.year}`)
    }
    return valor;
  }

  obtenerDiasNombre(mes:number):string[]{
    let valor:string[]=[];
    let daysInMonth = new Date(this.year, mes, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      let now = new Date(this.year, mes-1, i).toLocaleDateString('es-Es', { weekday:"long"});
      //console.log(this.removeAccents(now));
      valor.push(this.removeAccents(now))
    }
    return valor;

  }


  removeAccents = (str:string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }




}
/*


  ngOnInit(): void {
    console.log(this.daysInMonth);
    console.log(this.dt.getDate());
    var
var day =
console.log(day)


  }
 */
