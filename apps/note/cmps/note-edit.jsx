const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { noteService } from "../services/note.service.js"
import { NoteIndex } from "../views/note-index.jsx"

export function NoteEdit({ note }) {

    return <section>
        NoteEdit
        {console.log('NoteEdit', note)}
    </section>
}