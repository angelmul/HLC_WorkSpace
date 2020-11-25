import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Tarjeta } from '../modelo/Tarjeta';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  formulario: FormGroup;
  grupoDatosTarjeta: FormGroup;

  tarjetasAdmitidas = [
    {"nombre":"Visa"},
    {"nombre":"MasterCard"},
    {"nombre":"Euro6000"}
  ];

  validation_messages = {
    'numero': [
      { type: 'required', message: 'DNI es requerido' },
    ],
    'expira': [
      { type: 'required', message: 'Expira es requerido' },
      { type: 'minlength', message: 'DNI debe tener 9 caracteres' },
    ],
    'cvv': [
      { type: 'required', message: 'CVV es requerido' },
    ],
    'tipo': [
      { type: 'required', message: 'CVV es requerido' },
    ],
    'clientePromocional': [
      { type: 'required', message: 'CVV es requerido' },
    ],
    'grupoDatosTarjeta': [
      { type: 'required', message: 'Tipo es requerido' },    
    ]
  };

  constructor(public formBuilder: FormBuilder,
    private navCtrl: NavController) {
  }

  ngOnInit() {
    console.log("ngOnInit: home");
    this.grupoDatosTarjeta = new FormGroup({
      numero: new FormControl('', Validators.compose([
        this.validarNumeroTarjeta     
      ])),
      expira: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])),
      cvv: new FormControl('',Validators.compose([
        Validators.required      
      ])),
      tipo: new FormControl('',Validators.compose([
        Validators.required
      ])),
      clientePromocional: new FormControl('',Validators.compose([
        Validators.required
      ])),
    }, (formGroup: FormGroup) => {
      return this.validarGrupoDatosTarjeta(formGroup);
    });
  
    this.formulario = this.formBuilder.group({
      grupoDatosTarjeta : this.grupoDatosTarjeta
    });
  }

  onSubmit(values){
    let tarjeta:Tarjeta;
    tarjeta=new Tarjeta(values['grupoDatosTarjeta']['numero'],
      values['grupoDatosTarjeta']['expira'],
      values['grupoDatosTarjeta']['cvv'],
      values['grupoDatosTarjeta']['tipo'],
      values['grupoDatosTarjeta']['clientePromocional']
    );
    console.log(tarjeta);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          tarjeta: JSON.stringify(tarjeta)
      }
    };
    this.navCtrl.navigateForward('/pagina2', navigationExtras);
  }

  validarGrupoDatosTarjeta(fg: FormGroup){
    return null;
  }

  validarNumeroTarjeta(fc: FormControl) {
    return (null);
  }
  ionViewWillEnter(){
    console.log("ionViewWillEnter: home");
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter: home");
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave: home");
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave: home");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy: home");
  }
}
