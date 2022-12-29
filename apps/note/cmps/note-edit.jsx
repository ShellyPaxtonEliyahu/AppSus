const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM


export function NoteEdit({ noteEdit: note }) {


    return <section>
        <form>
            NoteEdit
            {console.log('note', note)}
            <button> Update</button>
        </form>
    </section>
}