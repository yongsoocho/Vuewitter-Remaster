export default ({ store, redirect }) => {
	if(store.state.users.me){
		return redirect('/');
	}
}