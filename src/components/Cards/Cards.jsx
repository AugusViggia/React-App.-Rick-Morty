import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={style.divCards}>
         {characters.map((character) => {
            return (
               <div key={character.id}>
                  <Card
                           key = {character.id}
                           name = {character.name}
                           species = {character.species}
                           gender = {character.gender}
                           image = {character.image}
                           onClose={onclose}
                  />
               </div>
            )
         })
         }
      </div>
   );
}
