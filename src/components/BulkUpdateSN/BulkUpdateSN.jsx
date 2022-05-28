import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function BulkUpdateSNForm () {

    const token = window.localStorage.getItem("token");
    const navigate = useNavigate();
    const { id } = useParams();
    const [stickynote, setStickynote] = useState();
}