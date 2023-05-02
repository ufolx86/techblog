import React from 'react'
import { useMeQuery } from '../../generated/graphql'
import { withApollo } from '../../utils/withApollo'

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
  const { data, loading, error } = useMeQuery()

  const userData = data?.me

  return (
    <>
      {error && <h5>Something went wrong</h5>}
      {loading ? (
        <h5>Data is loading...</h5>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <img src={userData?.pictureUrl} alt={userData?.username} />
          <h2>
            {userData?.firstName} {userData?.lastName}
          </h2>
          <p>{userData?.email}</p>
          <p>
            {userData?.bio === null ? 'You don´t have a bio yet' : userData?.bio}
          </p>
          +
        </div>
      )}
    </>
  )
}

export default withApollo({ ssr: false })(Profile)
