import React from "react";
import Input from "./Input";
import "./Profil.css"

function Profil({ profil, izmenaProfile }) {
  return (
    <div className="profilStrana">
      <img width="100%" height={250} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBUSEhAVFRUVFRUVFRUVFxcVFRUVFRUXFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NDg0NDzcZFRktLSs3LS03KystNysrKy0rKystKy0tKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAHcBpgMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIFA//EACoQAQEAAQIFAwMFAQEAAAAAAAABEQLwEyFRkbEDUtExYcESQYGh8XEy/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEGBP/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwDtCK72eAAAAAyAItQCxMqAKAAAAAAACKUEFygKAASs6bloAyEoKJlRRWckBoTJkFEyZBS1MoBlZUoDQmTIKmmpq1M6dQPQqSgLBIZBcpkZBvIzkBIqKIAAAZAAAABAAUAAAAAAADAgAqAKIoAZQFhYzM5byCJYoDOVMAKIQFEAUEAIEBpKlrIKFOYLGmLCA3kZyoAlAKqAAqAKAIaplQAAAEAtFYmYDRgigAAAlAyrLQIKAAAAAgUAVIoAgAqAJq+xGgEUAXDIoIVWbQZaDTP3BZCVCwD6FixkFlVL5WUFAAAAEUAAAAAAEa0ogLQSwFAABAEqpaCqzGgAADCNZBkqpQRRQAAAAQVAUTICiAKAAw2zQStWs1dQENOpNdZlBucjUWmoErWlKukFAAABMqhkFEAURQAAEyqUAABUAAUBlQCKJaCgAJhUBQAEtVLAUZkW0FAAS1WbeQGUn0X7qDP0hn+WgE/glJL1KC/qSlQD6qAAYMAUpgyBlcs4WAZSrJ4JAQWAKoAIpgEVAFGWgAATAuAGbVFwCCrIDIthgBMKAAAJYoAAACUDIsgAmFASpftGmZ+/UCVU5kBpKpQZ1SJJyWk+wGTCVQRUwoGRcAIGEAaKzqyC2mFwaQSRFsAbiVFASlSAtRcLgEkUAEUBBTAAAAAAAAAAACSqmAUExzyCgZAAAFARLGgGLFw1gwAlVMCpUl6Lb+4BImrLVhYIkQ/U1QSfwnL/AFS/wCb5JnFahqBltNNWwEMKmASf9GsANcXV1u5jxyOLq63/AHHxOwC1eNq913c+eZxdXW7z83ugFOLq63cx45F9XV7rvF/E7AFONq913c+Ti6ut3MeLQCnF1dbuY8SHG1e67ufIBVnq6vdd5+b3Tiaut3MeOQBS+rq63ePidl42r3Xdz55oBSerq913n5vc4urrdzHjkAVb6ur3XeL+J2OLq913c+agFOJq63cx4tL6mrrdzH4gBV4ur3Xdz55k9XV7rvPze6AU4mrrdzHjkvF1dbvHxOyAVeLq913c+eaT1NXuu8/N7gFOJq63cx45LxdXuu+f4gBTi6vdd3Pm0nqaut3MeKAVeJq63eJ+IcXV7ru588wA4ur3Xefm9ziaut3MeOQBS+pq913j4nZeLq913c+eYBU4urrd5+al9S/TN3MY7IIVeLq5871/uX8TsT1dX1/Vd3M/u3uAVf16ut3MeLU4mrre/XHxOwKVeJq63dz55pp9TV1vfpn5vcApxNXW9P6x45F9TV13cfE7AFOJq63r9fvnPfmT1dXW9+mZ+b3AKv671vf7Y8YL6ur3XfP8RBCnF1Z/9Xdt829y+pet3MeMgpS6rfrd/T8RAB//2Q==" />
      <img src={profil.slika} />
      <div>Ovde mozete izmeniti informacije profila</div>
      <Input value={profil.ime} onChange={value => {
        izmenaProfile('ime', value)
      }} type='text' placeholder='Ime' />
      <Input value={profil.email} onChange={value => {
        izmenaProfile('email', value)
      }} type='email' placeholder='Email' />
      <Input value={profil.datumRodjenja} onChange={value => {
        izmenaProfile('datumRodjenja', value)
      }} type='date' placeholder='Datum rodjenja' />
    </div>
  );
}

export default Profil;
