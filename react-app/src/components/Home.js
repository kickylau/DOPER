import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import TripCard from "./TripCard";
import AddATripModal from './AddATripModal';
import * as tripActions from "../store/trip"
import * as invitedUsersActions from "../store/invited_user"
