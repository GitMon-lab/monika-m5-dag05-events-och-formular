// Dag 5: Events. hamta("#id") (från dom.ts) ger elementet eller kastar ett fel, så du slipper null-kontroller.
// Dag 5: Events. Menyn filtreras när man klickar, och bokningsformuläret valideras (kontakt.js).
import { meny } from './data'
import { visaMeny, uppdateraRubrik, markeraDagensRatt, visaOrder } from './ui'
import { billigast } from './meny'
import { filtreraMeny } from './filter'
import { kopplaFilter, kopplaLaggTill } from './events'
import { laggTillIOrder, rensaOrder } from './order'
import { hamta } from './dom'
import type { Filter, OrderRad } from './typer'

const lista = hamta('#meny-lista')
const rubrik = hamta('#meny-rubrik')
const filterGrupp = hamta('#filter')

// DEL 1: din första händelse -------------------------------------------
// 1. Hämta knappen .knapp i #hero. Lägg till en lyssnare för "click" som skriver ut
//    handelse.type och handelse.target i Console.
// 2. Lägg till handelse.preventDefault() i lyssnaren. Vad händer med länken?
//    Ta bort preventDefault igen när du provat.
//Visar inte min text i console, utan prevent följer läsaren href=#meny scroller direkt till id meny
//när läsaren scollar/navigerar rensas konsollen innan man ser den. Prevent låter ditt JavaScript köra klart
/* Man kan sätta fördröjning då visas den  Handlar om att det är en länk och inte en button a taggar följer länken
setTimeout(() => { console.log("Nu scrollar vi")location.hash = "meny"}, 500)
*/
/*  <section id="hero">
      <h2 id="hero-rubrik">Nybakat varje morgon</h2>
      <p>Hos oss bakas allt från grunden. Kom in för en bulle, en kopp kaffe och en stund för dig själv.</p>
      <a href="#meny" class="knapp">Se menyn</a>
    </section>
*/
//Lägg en lyssnare på knappen i hero som skriver ut `handelse.type` och `handelse.target` i Console.
//Klicka, och titta. Prova sedan `handelse.preventDefault()` och se vad som händer med länken. Ta bort den igen
// TODO

const heroKnapp = document.querySelector('#hero .knapp')

heroKnapp?.addEventListener('click', (handelse) => {
    handelse.preventDefault()
    //   console.log(handelse.type, handelse.target)
})

// DEL 2: filtret ----------------------------------------------------------
// 3. Skriv funktionen uppdateraMeny(filter: Filter): void:
// hämta rätter med filtreraMeny,
//  visa dem med visaMeny, uppdatera rubriken och markera den billigaste lunchen som dagens rätt
//  (om det finns någon lunch).

// 4. Anropa uppdateraMeny("alla") direkt, och koppla filterknapparna med kopplaFilter.
// TODO

function uppdateraMeny(filter: Filter): void {
    const ratter = filtreraMeny(meny, filter)
    visaMeny(lista, ratter)
    uppdateraRubrik(rubrik, ratter.length)

    const luncher = ratter.filter((r) => r.kategori === 'lunch')
    const dagens = billigast(luncher)
    if (dagens) {
        markeraDagensRatt(lista, dagens.id)
    }
}
uppdateraMeny('alla')
kopplaFilter(filterGrupp, uppdateraMeny)

// DEL 3 (fördjupning): beställningen ---------------------------------------
// 5. let order: OrderRad[] = []; Koppla kopplaLaggTill(lista, ...) så att klick lägger till i order och visar den
//    med visaOrder. Koppla knappen #rensa-order till rensaOrder.
// TODO
// let orderRef = []{
//     lista: hamta('#order-lista'),
//     summa: hamta('#order-summa'),
//     tom: hamta('#order-tom')
// }
