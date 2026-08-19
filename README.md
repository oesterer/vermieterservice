# Vermieter Service Hürzeler

Statische Website für GitHub Pages. Es sind weder npm noch ein Build-Schritt erforderlich.

## Lokal ansehen

Die Dateien können direkt über einen beliebigen statischen Webserver ausgeliefert werden, zum Beispiel mit der in macOS enthaltenen Python-Version:

```sh
python3 -m http.server 8080
```

Danach `http://localhost:8080` öffnen.

## GitHub Pages

In den Repository-Einstellungen unter **Pages** als Quelle den Hauptbranch und den Ordner `/ (root)` auswählen. Alle internen Pfade sind relativ und funktionieren deshalb sowohl auf einer eigenen Domain als auch unter `benutzername.github.io/repository`.
