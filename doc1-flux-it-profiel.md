# Flux-patroon uitgelegd (voor IT/software-profiel)

## 1. Wat is Flux?
Flux is een architectuurpatroon voor state management met **unidirectionele datastroom**.  
Alle wijzigingen in state lopen via een vaste route:

`View -> Action -> Dispatcher -> Store -> View`

Het doel is voorspelbaarheid: je weet altijd **waar** een wijziging vandaan komt en **hoe** die door het systeem beweegt.

## 2. Waarom Flux?
Bij grotere frontend-apps ontstaan snel problemen zoals:
- onduidelijke datastromen
- side effects op onverwachte plekken
- lastig te reproduceren bugs

Flux pakt dit aan door:
- 1 richting van data af te dwingen
- writes te centraliseren
- update-logica te isoleren in stores/reducers

## 3. Kernonderdelen

### Action
Een plain object (of payload) dat beschrijft *wat er gebeurd is*.

Voorbeeld:
```ts
{ type: "ADD_TODO", payload: { id: 7, text: "Tests schrijven" } }
```

### Dispatcher
Centrale hub die actions distribueert naar stores.  
Klassieke Flux heeft een expliciete dispatcher; Redux abstraheert dit grotendeels weg.

### Store
Bevat state en logica om op actions te reageren.  
In klassieke Flux kunnen er meerdere stores zijn met eigen domeinverantwoordelijkheid.

### View (UI)
Luistert naar store-updates en rendert opnieuw.  
User events in de view triggeren weer nieuwe actions.

## 4. Datastroom stap voor stap
1. Gebruiker klikt op een knop.
2. View maakt een action (`type` + `payload`).
3. Dispatcher verspreidt de action.
4. Relevante store verwerkt de action en maakt nieuwe state.
5. View ontvangt state-update en rendert opnieuw.

Belangrijk: de view mutereert state niet direct.

## 5. Mini-voorbeeld
Gebruikscase: gebruiker voegt een taak toe.

1. UI-event: `onSubmit("Documentatie schrijven")`
2. Action: `{ type: "TODO_ADDED", payload: { ... } }`
3. Dispatcher: stuurt action naar `TodoStore`
4. Store: voegt item toe aan state-collectie
5. UI: krijgt update en toont de nieuwe taak

## 6. Flux vs Redux (korte duiding)
- **Flux**: patroon/familie van implementaties; vaak meerdere stores + dispatcher.
- **Redux**: concrete implementatie geïnspireerd door Flux; 1 centrale store, pure reducers, middleware-ecosysteem.

## 7. Voordelen
- traceerbare state transitions
- betere testbaarheid (action/reducer logica)
- minder verborgen afhankelijkheden
- eenvoudiger debuggen/time-travel tooling (Redux)

## 8. Nadelen / trade-offs
- meer boilerplate in kleine projecten
- extra concepten voor beginners
- discipline nodig rond side effects

## 9. Wanneer toepassen?
Flux-achtig state management is vooral nuttig bij:
- complexe UI-state met veel interacties
- meerdere teams/features op dezelfde frontend
- behoefte aan auditability en voorspelbaar gedrag

Voor simpele schermen of korte flows kan lokale component-state vaak voldoende zijn.

