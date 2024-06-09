import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartViewerComponent } from './datos-grafico/ChartViewer.component';
import { DataTableComponent } from './datos-tabla/DataTable.component';

const routes: Routes = [
  { path: '', component: DataTableComponent }, // Ruta para la página de inicio
  { path: 'datos', component: DataTableComponent }, // Ruta para el componente de inicio de sesión
  { path: 'graficos', component: ChartViewerComponent }, // Ruta para el componente de registro
  /* { path: '404', component: NotFoundComponent }, // Ruta para la página de error 404
  { path: '**', redirectTo: '/404' } // Redirecciona cualquier otra ruta a la página de error 404 */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
