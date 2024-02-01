'use client'

import { Button, Input, useToast } from '@/app/chakra'
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
