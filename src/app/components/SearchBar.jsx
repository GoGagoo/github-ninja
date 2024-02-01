'use client'

import { Button, Input, useToast } from '../chakra.js'
import { useState } from 'react'

const SearchBar = ({ setUserData, setLoading }) => {
	const [query, setQuery] = useState('')
	const toast = useToast()

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (!query) return
		setLoading(true)
		setUserData(null)
		try {
			const res = await fetch(`https://api.github.com/users/${query}`)
			const data = await res.json()
			
			if (data.message) {
				return toast({
					title: 'Error',
					description: error.message,
					status: 'error',
					duration: 3000,
					isClosable: true,
				})
			}
			setUserData(data)
			addUserToLocaleStorage(data, query)
		} catch (error) {
			toast({
				title: 'Error',
				description: error.message,
				status: 'error',
				duration: 3000,
				isClosable: true,
			})
		} finally {
			setLoading(false)
		}
	}

	const addUserToLocaleStorage = (data, username) => {
		const users = JSON.parse(localStorage.getItem('guthub-users')) || []
		const userExists = users.find(user => user.id === username)

		if (userExists) {
			users.splice(users.indexOf(userExists), 1)
		}
		users.unshift({
			id: username,
			avatar_url: data.avatar_url,
			name: data.name,
			url: data.html_user
		})

		localStorage.setItem('github-users', JSON.stringify(users))
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input
				variant={'outline'}
				placeholder={'type a username (i.e. GoGagoo)'}
				focusBorderColor='green.500'
				onChange={(e) => setQuery(e.target.value)}
			/>
			<Button
				opacity={!query ? 0.5 : 1}
				disabled={!query}
				size='md'
				type='submit'
				colorScheme='whatsapp'
				mt={4}
			>
				Search
			</Button>
		</form>
	)
}

export default SearchBar
