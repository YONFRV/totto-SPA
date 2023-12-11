<?php

class userData
{
    public $email;
    public $document;
    public $name;
    public $surname;
    public $cellphone;
    public $department;
    public $city;
    public $birthday;
    public $he_has_children;
    public $gender;
    public $tyc_update;
    public $data_treatment;
    public $create_at;
    public $update_at;
         // Constructor de la clase
    public function __construct($email, $document, $name, $surname, $cellphone, $department, $city, $birthday, $he_has_children, $gender, $tyc_update, $data_treatment,$number_updates, $create_at, $update_at)
    {
        $this->email = $email;
        $this->document = $document;
        $this->name = $name;
        $this->surname = $surname;
        $this->cellphone = $cellphone;
        $this->department = $department;
        $this->city = $city;
        $this->birthday = $birthday;
        $this->he_has_children = $he_has_children;
        $this->gender = $gender;
        $this->tyc_update = $tyc_update;
        $this->data_treatment = $data_treatment;
        $this->number_updates = $number_updates;
        $this->create_at = $create_at;
        $this->update_at = $update_at;
    }
}
