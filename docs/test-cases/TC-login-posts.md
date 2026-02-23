# Dokumentacja Przypadków Testowych (Test Cases)

Ten dokument zawiera opisy przypadków testowych dla projektu nauki automatyzacji w Playwright.

---

## 1. Testy UI (Interfejs Użytkownika)
**Aplikacja:** [The Internet (HerokuApp)](https://the-internet.herokuapp.com/login)

### TC-UI-01: Skuteczne logowanie przy użyciu poprawnych danych
*   **Wymagania wstępne:** Przeglądarka jest uruchomiona i ma dostęp do internetu.
*   **Kroki testowe:**
    1. Przejdź pod adres `https://the-internet.herokuapp.com/login`.
    2. Wprowadź nazwę użytkownika: `tomsmith`.
    3. Wprowadź hasło: `SuperSecretPassword!`.
    4. Kliknij przycisk "Login".
*   **Oczekiwany rezultat:**
    - Użytkownik zostaje przekierowany na stronę `/secure`.
    - Wyświetla się komunikat sukcesu: "You logged into a secure area!".
    - Przycisk "Logout" jest widoczny na stronie.

### TC-UI-02: Błąd logowania przy użyciu błędnych danych
*   **Kroki testowe:**
    1. Przejdź pod adres `https://the-internet.herokuapp.com/login`.
    2. Wprowadź dowolną błędną nazwę użytkownika (np. `invalidUser`).
    3. Wprowadź dowolne błędne hasło (np. `invalidPassword`).
    4. Kliknij przycisk "Login".
*   **Oczekiwany rezultat:**
    - Użytkownik pozostaje na stronie logowania.
    - Wyświetla się komunikat o błędzie: "Your username is invalid!".

---

## 2. Testy API (Backend)
**Endpoint:** [JSONPlaceholder API](https://jsonplaceholder.typicode.com)

### TC-API-01: Pobieranie danych konkretnego posta (GET)
*   **Endpoint:** `GET /posts/1`
*   **Kroki testowe:**
    1. Wyślij zapytanie typu GET do endpointu `/posts/1`.
*   **Oczekiwany rezultat:**
    - Status odpowiedzi to `200 OK`.
    - Body odpowiedzi zawiera pola: `id` (równe 1), `userId`, `title`, `body`.

### TC-API-02: Tworzenie nowego posta (POST)
*   **Endpoint:** `POST /posts`
*   **Kroki testowe:**
    1. Przygotuj obiekt JSON z polami `title`, `body`, `userId`.
    2. Wyślij zapytanie typu POST z tym obiektem do endpointu `/posts`.
*   **Oczekiwany rezultat:**
    - Status odpowiedzi to `201 Created`.
    - Body odpowiedzi zawiera przesłane dane oraz automatycznie wygenerowany `id`.

---

## 3. Instrukcja uruchomienia testów
1. Zainstaluj zależności: `npm install`
2. Zainstaluj przeglądarki: `npx playwright install`
3. Uruchom testy: `npm test`
