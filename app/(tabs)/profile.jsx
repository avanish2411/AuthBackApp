import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useUser } from '@clerk/clerk-react';
import { useClerk } from '@clerk/clerk-react';

const Profile = () => {
  const { user } = useUser();
  const { signOut, clerk } = useClerk();

  const handleDeleteAccount = async () => {
    try {
      await clerk.users.deleteUser(user.id);
      signOut();
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <View style={styles.container}>
      <Text>{user.lastName}</Text>
      <Text>{user.emailAddresses[0].emailAddress}</Text>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAccount}>
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'red',
    marginTop: 20,
    borderRadius: 5,
  },
  signOutButton: {
    backgroundColor: 'blue',
    marginTop: 10,
    borderRadius: 5,
  },
});
