// Dag 5: Validering av bokningsformuläret. Rena funktioner, lätta att testa.
// Varje valideraX-funktion tar ett värde (text) och returnerar ett felmeddelande som text,
// eller en tom text "" om värdet är giltigt. Meddelandena står i tests.js.
// Namn: obligatoriskt, minst 2 tecken efter trim().
export function valideraNamn(text: string): string {
    // TODO
    const rensad = text.trim()
    if (rensad === '') {
        return 'Fyll i ditt Namn'
    }

    if (rensad.length < 2) {
        return 'Namnet måste vara minst 2 tecken'
    }
    return ''
}

// E-post: obligatorisk, måste innehålla @, och ha formen text@text.text.
export function valideraEpost(text: string): string {
    // TODO
}
// Telefon: VALFRI (tom text är giltigt). Annars bara siffror, mellanslag, + och -, och minst 7 siffror.
export function valideraTelefon(text: string): string {
    // TODO
}
// Datum: obligatoriskt. text och idag är datum som "2026-10-19". Inte före idag.
export function valideraDatum(text: string, idag: string): string {
    // TODO
}
// Antal personer: obligatoriskt (en tom text betyder att inget valts).
export function valideraAntal(text: string): string {
    // TODO
}
// Dagens datum som "2026-10-19" (färdig, du behöver inte ändra den).
export function dagensDatum(): string {
    return new Date().toLocaleDateString('sv-SE')
}

// Validera ett helt formulär. varden = { namn, epost, telefon, datum, antal } (texter).
// Returnera ett objekt med BARA de fält som har fel: { namn: "Fyll i ditt namn." }
// Giltigt formulär ger ett tomt objekt {}.
export function valideraFormular(
    varden: Record<string, string>,
    idag: string
): Record<string, string> {
    // TODO

    const fel: Record<string, string> = {}

    const namnFel = valideraNamn(varden.namn ?? '')
    if (namnFel) fel.namn = namnFel

    const epostFel = valideraEpost(varden.epost ?? '')
    if (epostFel) fel.epost = epostFel

    const telefonFel = valideraTelefon(varden.telefon ?? '')
    if (telefonFel) fel.telefon = telefonFel

    const datumFel = valideraDatum(varden.datum ?? '', idag)
    if (datumFel) fel.datum = datumFel

    const antalFel = valideraAntal(varden.antal ?? '')
    if (antalFel) fel.antal = antalFel
    return fel
}
