import csv
from datetime import datetime

FILENAME = "history.csv"

def main():
    date = datetime.today().strftime('%Y-%m-%d')
    print("Hva gjorde du? Skriv 'sykkel' for sykling, 'gå' for gåtur.")
    activity = input("Aktivitet (sykkel/gå): ").strip().lower()
    if activity not in ("sykkel", "gå"):
        print("Ugyldig aktivitet! Velg 'sykkel' eller 'gå'.")
        return

    try:
        km = float(input("Hvor mange kilometer?: ").replace(',', '.'))
    except ValueError:
        print("Ugyldig tall for km.")
        return

    try:
        with open(FILENAME, 'x', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow(['date', 'activity', 'km'])
    except FileExistsError:
        pass

    with open(FILENAME, 'a', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow([date, activity, km])

    print(f"Lagret: {date}, {activity}, {km} km")

if __name__ == "__main__":
    main()
