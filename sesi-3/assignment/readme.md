# Tugas Praktik Mandiri

Peserta dipersilakan mengerjakan minimal 10 pertanyaan dari <https://www.sql-practice.com/> dan menuliskan jawabannya untuk dikumpulkan.

Catatan: Kumpulkan dalam format Google docs maksimal 5 halaman.

## Pertanyaan dan Penyelesaian

1. Show first name, last name, and gender of patients whose gender is 'M'.

   ```sql
   SELECT first_name, last_name, gender
   FROM patients
   WHERE gender = 'M'
   ```

2. Show first name and last name of patients who does not have allergies. (null)

   ```sql
   SELECT first_name, last_name
   FROM patients
   WHERE allergies IS NULL
   ```

3. Show first name of patients that start with the letter 'C'.

   ```sql
   SELECT first_name
   FROM patients
   WHERE first_name LIKE 'C%'
   ```

4. Show first name and last name of patients that weight within the range of 100 to 120 (inclusive).

   ```sql
   SELECT first_name, last_name
   FROM patients
   WHERE weight BETWEEN 100 AND 120
   ```

5. Update the patients table for the allergies column. If the patient's allergies is null then replace it with 'NKA'.

   ```sql
   UPDATE patients
   SET allergies = 'NKA'
   WHERE allergies IS NULL
   ```

6. Show first name and last name concatinated into one column to show their full name.

   ```sql
   SELECT CONCAT(first_name, ' ', last_name)
   AS full_name
   FROM patients
   ```

7. Show first name, last name, and the full province name of each patient. Example: 'Ontario' instead of 'ON'

   ```sql
   SELECT patients.first_name, patients.last_name, province_names.province_name
   FROM patients
   INNER JOIN province_names
   ON patients.province_id = province_names.province_id
   ```

8. Show how many patients have a birth_date with 2010 as the birth year.

   ```sql
   SELECT COUNT(*) AS total_patients
   FROM patients
   WHERE YEAR(birth_date) = 2010
   ```

9. Show the first_name, last_name, and height of the patient with the greatest height.

   ```sql
   SELECT first_name, last_name, height
   FROM patients
   WHERE height = (SELECT MAX(height) FROM patients)
   ```

10. Show all columns for patients who have one of the following patient_ids: 1, 45, 534, 879, 1000

    ```sql
    SELECT *
    FROM patients
    WHERE patient_id IN (1, 45, 534, 879, 1000)
    ```
