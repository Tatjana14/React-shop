
import s from './Categories.module.css';
import CategoriesCard from './categoriesCard/CategoriesCard';
import quadro from '../../../../src/assets/img/catalog_section/quadro.svg'
import hydro  from '../../../../src/assets/img/catalog_section/hydro.svg'
import boat  from '../../../../src/assets/img/catalog_section/boat.svg'
import snow  from '../../../../src/assets/img/catalog_section/snow.svg'
import allTerain  from '../../../../src/assets/img/catalog_section/all_terrain_vehicle.svg'
import engine  from '../../../../src/assets/img/catalog_section/engine.svg'

function Categories() {
  return (
    <div className = {s.wrapper}>
      <CategoriesCard 
      categoriesAdress = "#" 
      categoriesValue = "Квадроциклы" 
      categoriesAdress2 = "#" 
      imgCategories ={quadro} 
      altCategories = "Квадроциклы" 
      />
      <CategoriesCard 
      categoriesAdress = "#" 
      categoriesValue = "Гидроциклы" 
      categoriesAdress2 = "#" 
      imgCategories ={hydro} 
      altCategories = "Гидроциклы" 
      />
      <CategoriesCard 
      categoriesAdress = "#" 
      categoriesValue = "Катера" 
      categoriesAdress2 = "#" 
      imgCategories ={boat} 
      altCategories = "Катера" 
      />
      <CategoriesCard 
      categoriesAdress = "#" 
      categoriesValue = "Снегоходы" 
      categoriesAdress2 = "#" 
      imgCategories ={snow} 
      altCategories = "Снегоходы" 
      />
      <CategoriesCard 
      categoriesAdress = "#" 
      categoriesValue = "Вездеходы" 
      categoriesAdress2 = "#" 
      imgCategories ={allTerain} 
      altCategories = "Вездеходы" 
      />
      <CategoriesCard 
      categoriesAdress = "#" 
      categoriesValue = "Двигатели" 
      categoriesAdress2 = "#" 
      imgCategories ={engine} 
      altCategories = "Двигатели" 
      />
    </div>
    )
}

export default Categories;
