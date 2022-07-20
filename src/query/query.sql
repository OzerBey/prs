//cities
CREATE TABLE cities (
    id int NOT NULL,
    name varchar(255) NOT NULL,
    CONSTRAINT PK_City PRIMARY KEY (id)
);


//addresses
CREATE TABLE addresses (
    id int NOT NULL,
    city_id int,
		street varchar(255) NOT NULL,
	  building_no int NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT FK_city FOREIGN KEY (city_id)
    REFERENCES cities(id)
);

//photos
CREATE TABLE photos (
    id int NOT NULL,
    photo varchar(255) NOT NULL,
		PRIMARY KEY (id)
);
CREATE TABLE photosBlob (
    id int NOT NULL,
    photo BLOB NOT NULL,
		PRIMARY KEY (id)
);

//patients
CREATE TABLE patients (
    id int NOT NULL,
    address_id int NOT NULL,
    nationality_id int,
		name varchar(255) NOT NULL,
		photo_id int NOT NULL,
		gender varchar(5) NOT NULL,
		phone_number varchar(15) NOT NULL,
		date_of_birth DATE NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT FK_PatientsToaddress FOREIGN KEY (address_id) REFERENCES addresses(id),
		CONSTRAINT FK_PatientsTophoto FOREIGN KEY (photo_id) REFERENCES photos(id)
);

//employees
CREATE TABLE employees (
    id int NOT NULL,
    address_id int NOT NULL,
    nationality_id int,
		name varchar(255) NOT NULL,
		department varchar(255) NOT NULL,
		photo_id int,
		gender varchar(5) NOT NULL,
		phone_number varchar(15) NOT NULL,
		date_of_birth DATE NOT NULL,
    PRIMARY KEY (id)
);

//doctors
CREATE TABLE doctors (
    id int NOT NULL AUTO_INCREMENT,
    employee_id int NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT FK_DoctorsToEmpolyee FOREIGN KEY (employee_id) REFERENCES employees(id)
);

//officers
CREATE TABLE officers (
    id int NOT NULL,
    employee_id int NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT FK_OfficerToEmpolyee FOREIGN KEY (employee_id) REFERENCES employees(id)
);

//appointments
CREATE TABLE appointments (
    id int NOT NULL,
    doctor_id int NOT NULL,
    patient_id int,
		date TIMESTAMP NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT FK_AppoitmentsToDoctor FOREIGN KEY (doctor_id) REFERENCES doctors(id),
		CONSTRAINT FK_AppinmentsToPatient FOREIGN KEY (patient_id) REFERENCES patients(id)
);

//prescriptions
CREATE TABLE prescriptions (
    id int NOT NULL,
    doctor_id int NOT NULL,
    patient_id int,
		date TIMESTAMP NOT NULL,
		description TEXT NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT FK_PrescriptionsToDoctor FOREIGN KEY (doctor_id) REFERENCES doctors(id),
		CONSTRAINT FK_PrescriptionsToPatient FOREIGN KEY (patient_id) REFERENCES patients(id)
);

//getAll tables from Database
SELECT * FROM cities;
SELECT * FROM addresses;
SELECT * FROM patients;
SELECT * FROM doctors;
SELECT * FROM photos;
SELECT * FROM appointments;
SELECT * FROM prescriptions;
SELECT * FROM employees;

//other queries
SELECT count(*) as kacTane FROM patients WHERE name like ("and%")

SELECT *
FROM doctors
RIGHT JOIN employees ON doctors.employee_id=employees.id;

SELECT *
FROM officers
INNER JOIN employees ON officers.employee_id=officers.id WHERE employees.id="3";
