
let sene = 2024
let bDogum = Number(prompt('Dogum yılım')) ,
 sDogum = Number(prompt('Senin dogum yılın'))   ,
bYas = sene-bDogum,
sYas = sene-sDogum
yasFarki = bYas-sYas

if( yasFarki >0) {

        alert( `Senin yaşın ${sYas} benim yaşım ${bYas} aramızda ${yasFarki} yaş farkı var`)
}

else if (yasFarki ===0) {

        alert( `Senin yaşın ${sYas} benim yaşım ${bYas} aramızda ${yasFarki} yaş farkı yoktur`)
}

else if (yasFarki <0 ) {

        alert( `Senin yaşın ${sYas} benim yaşım ${bYas} aramızda ${yasFarki*(-1)} yaş farkı var`)
}

else (
        alert('Hatalı giriş yaptınız')
)